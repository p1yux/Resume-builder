'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { ArrowLeft, Lightbulb, Edit, Plus, Trash2, Search, Calendar, Building } from 'lucide-react'
import { Input } from '~/components/ui/input'
import { Skeleton } from '~/components/ui/skeleton'
import { Badge } from '~/components/ui/badge'
import Link from 'next/link'
import { SectionNav } from '~/components/ui/section-nav'
import { getAllResume } from '~/app/(app)/dashboard/queries'
import { ResumeData, Project } from '~/app/(app)/dashboard/resume/types'

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<Project & { resumeId: string, resumeTitle: string } | null>(null)
  const [highlightText, setHighlightText] = useState('')
  
  // Fetch all resumes to extract project entries
  const resumesQuery = useQuery({
    queryKey: ['all-resume'],
    queryFn: getAllResume,
  })

  // Extract all project items from all resumes
  const projectEntries = resumesQuery.data?.flatMap((resume: any) => {
    if (!resume.resume_data) return []
    
    let resumeData: ResumeData
    try {
      if (typeof resume.resume_data === 'string') {
        resumeData = JSON.parse(resume.resume_data)
      } else {
        resumeData = resume.resume_data
      }
      
      return (resumeData.projects || []).map((project: Project) => ({
        ...project,
        resumeId: resume.slug,
        resumeTitle: resume.title
      }))
    } catch (error) {
      console.error('Error parsing resume data:', error)
      return []
    }
  }) || []

  // Filter projects based on search query
  const filteredProjects = projectEntries.filter((project: Project & { resumeId: string, resumeTitle: string }) => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  
  // Handle item selection
  const handleSelectItem = (item: Project & { resumeId: string, resumeTitle: string }) => {
    setSelectedItem(item)
  }

  // Handle text highlighting (simulating making notes)
  const handleTextSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) {
      setHighlightText(selection.toString())
    }
  }
  
  return (
    <div className="p-4 bg-white dark:bg-black min-h-screen">
      <div className="flex flex-col gap-5 mb-6 top-10 z-10 w-full justify-between items-center ">
        {/* <h1 className="text-2xl font-bold flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
          <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Projects
        </h1> */}
        <SectionNav />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left panel - List of projects */}
        <div>
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="px-4 py-3 flex flex-row items-center justify-between space-y-0 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-md font-medium text-gray-900 dark:text-white">All Projects</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                <Plus className="h-4 w-4" /> Add New
              </Button>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  className="pl-8 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="h-[calc(100vh-270px)] overflow-auto pr-2">
                {resumesQuery.isLoading ? (
                  Array(5).fill(0).map((_, i) => (
                    <div key={i} className="mb-3">
                      <Skeleton className="h-6 w-3/4 mb-1 bg-gray-200 dark:bg-gray-700" />
                      <Skeleton className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700" />
                    </div>
                  ))
                ) : (
                  filteredProjects.length === 0 ? (
                    <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                      No projects found
                    </div>
                  ) : (
                    filteredProjects.map((project, index) => (
                      <div key={`${project.resumeId}-${index}`} className="mb-4">
                        <div 
                          className={`p-3 rounded-md cursor-pointer transition-all duration-200 border-l-4 ${
                            selectedItem === project 
                              ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-950/50' 
                              : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-200 dark:hover:border-gray-600'
                          }`}
                          onClick={() => handleSelectItem(project)}
                        >
                          <div className="font-medium text-gray-900 dark:text-white">{project.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {project.description.substring(0, 100)}
                            {project.description.length > 100 ? '...' : ''}
                          </div>
                          <Badge variant="outline" className="mt-2 text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">
                            {project.resumeTitle}
                          </Badge>
                        </div>
                        {index < filteredProjects.length - 1 && <Separator className="my-2 bg-gray-200 dark:bg-gray-700" />}
                      </div>
                    ))
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right panel - Selected project details */}
        <div className="lg:col-span-2">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="px-4 py-3 flex flex-row items-center justify-between space-y-0 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-md font-medium text-gray-900 dark:text-white">
                {selectedItem ? 'Project Details' : 'Select a project'}
              </CardTitle>
              {selectedItem && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/50 border-red-300 dark:border-red-600">
                    <Trash2 className="h-3.5 w-3.5 mr-1" /> Delete
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="px-4 pb-4">
              {!selectedItem ? (
                <div className="flex flex-col items-center justify-center h-[calc(100vh-270px)] text-center text-gray-500 dark:text-gray-400">
                  <Lightbulb className="h-12 w-12 mb-4 text-gray-300 dark:text-gray-600" />
                  <p>Select a project to view details</p>
                </div>
              ) : (
                <div onMouseUp={handleTextSelection}>
                  <Tabs defaultValue="details" className="w-full">
                    <TabsList className="mb-4 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                      <TabsTrigger value="details" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400">Details</TabsTrigger>
                      <TabsTrigger value="notes" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white text-gray-600 dark:text-gray-400">Notes</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="details" className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedItem.title}</h3>
                        <Badge className="mt-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800" variant="outline">
                          From: {selectedItem.resumeTitle}
                        </Badge>
                      </div>
                      
                      {selectedItem.skills_used && selectedItem.skills_used.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Skills Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.skills_used.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                {skill.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Description</h4>
                        <p className="text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
                          {selectedItem.description}
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notes">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-md">
                          <h4 className="font-medium mb-2">Add Note</h4>
                          {highlightText ? (
                            <div className="mb-3">
                              <p className="text-sm">Selected text:</p>
                              <div className="p-2 bg-yellow-50 border border-yellow-200 rounded text-sm mt-1">
                                {highlightText}
                              </div>
                              <div className="flex gap-2 mt-2">
                                <Button size="sm" variant="outline">
                                  <span className="font-bold mr-1">B</span> Bold
                                </Button>
                                <Button size="sm" variant="outline">
                                  <span className="underline mr-1">U</span> Underline
                                </Button>
                                <Button size="sm" variant="default" className="ml-auto">
                                  Save Note
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Select text in the details tab to create a note
                            </p>
                          )}
                        </div>
                        
                        <h4 className="font-medium">Existing Notes</h4>
                        <div className="text-gray-500 dark:text-gray-400 text-sm text-center py-4">
                          No notes added yet
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 