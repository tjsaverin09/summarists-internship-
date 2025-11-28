import Searchbar from "@/components/Searchbar"
import Sidebar from "@/components/Sidebar"

interface LayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: LayoutProps) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Searchbar />
            <div style={{display: 'flex', flex: 1}}>
            <aside style={{width: '300px', backgroundColor: 'f5f5f5'}}>
                <Sidebar />
            </aside>
            <main style={{flex: 1, padding: '20px'}}>
                {children}
            </main>
            </div>
        </div>
    )
}