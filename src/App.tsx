import { Home, Search, PlusSquare, Heart, User, MessageCircle, Bookmark } from "lucide-react"
import { cn } from "../lib/utils" 

export default function App() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* SIDEBAR - Navigation Gauche */}
      <nav className="fixed bottom-0 z-10 flex h-16 w-full border-t bg-background px-4 md:sticky md:top-0 md:h-screen md:w-64 md:flex-col md:border-r md:border-t-0 md:py-8">
        <h1 className="hidden mb-10 text-2xl font-bold tracking-tighter text-primary md:block">
          Mallow
        </h1>
        
        <div className="flex w-full items-center justify-around md:flex-col md:items-start md:gap-4">
          <NavItem icon={<Home />} label="Accueil" active />
          <NavItem icon={<Search />} label="Recherche" />
          <NavItem icon={<PlusSquare />} label="Créer" />
          <NavItem icon={<Heart />} label="Notifications" />
          <NavItem icon={<User />} label="Profil" />
        </div>
      </nav>

      {/* MAIN FEED - Flux Central */}
      <main className="flex-1 pb-20 md:pb-0">
        <div className="mx-auto max-w-600px py-8 px-4">
          
          {/* Section Stories */}
          <div className="mb-8 flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="h-16 w-16 rounded-full bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-2px">
                  <div className="h-full w-full rounded-full border-2 border-background bg-muted" />
                </div>
                <span className="text-xs">User_{i}</span>
              </div>
            ))}
          </div>

          {/* Liste des Posts */}
          <div className="space-y-8">
            <Post username="jane_doe" location="Paris, France" likes={1240} />
            <Post username="alex_dev" location="Mallow HQ" likes={850} />
          </div>
        </div>
      </main>
    </div>
  )
}

// --- SOUS-COMPOSANTS ---

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={cn(
      "flex cursor-pointer items-center gap-4 rounded-lg p-3 transition-colors hover:bg-secondary",
      active && "font-bold"
    )}>
      {icon}
      <span className="hidden md:inline text-lg">{label}</span>
    </div>
  )
}

function Post({ username, location, likes }: { username: string, location: string, likes: number }) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-xs">
      {/* Header Post */}
      <div className="flex items-center gap-3 p-4">
        <div className="h-8 w-8 rounded-full bg-muted" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{username}</span>
          <span className="text-xs text-muted-foreground">{location}</span>
        </div>
      </div>

      {/* Image Post */}
      <div className="aspect-square w-full bg-muted flex items-center justify-center text-muted-foreground">
        {/* Ici viendra ton <img /> */}
        Photo Mallow
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-4">
            <Heart className="h-6 w-6 cursor-pointer hover:text-destructive transition-colors" />
            <MessageCircle className="h-6 w-6 cursor-pointer" />
          </div>
          <Bookmark className="h-6 w-6 cursor-pointer" />
        </div>
        
        <p className="text-sm font-bold">{likes.toLocaleString()} j'aime</p>
        <p className="mt-1 text-sm">
          <span className="font-bold mr-2">{username}</span>
          C'est le début de l'aventure Mallow !
        </p>
      </div>
    </div>
  )
}