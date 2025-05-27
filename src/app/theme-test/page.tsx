export default function ThemeTest() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Theme Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Colors</h2>
            
            <div className="space-y-2">
              <div className="p-4 bg-card border rounded-lg">
                <p className="text-card-foreground">Card background</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground">Muted background</p>
              </div>
              
              <div className="p-4 bg-primary rounded-lg">
                <p className="text-primary-foreground">Primary background</p>
              </div>
              
              <div className="p-4 bg-secondary rounded-lg">
                <p className="text-secondary-foreground">Secondary background</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Typography</h2>
            
            <div className="space-y-2">
              <p className="text-foreground">Default text color</p>
              <p className="text-muted-foreground">Muted text color</p>
              <p className="text-primary">Primary text color</p>
              <p className="text-secondary-foreground">Secondary text color</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Font Test (Bricolage Grotesque)</h3>
              <p className="text-lg">The quick brown fox jumps over the lazy dog.</p>
              <p className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-sm">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-sm">1234567890 !@#$%^&*()</p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>• Use the theme toggle in the sidebar (dashboard) or top-right corner (auth pages)</p>
            <p>• Toggle between Light → Dark → System modes</p>
            <p>• Verify that colors change appropriately</p>
            <p>• Check that the Bricolage Grotesque font is applied consistently</p>
          </div>
        </div>
      </div>
    </div>
  )
} 