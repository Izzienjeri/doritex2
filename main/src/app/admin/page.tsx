import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ShoppingBag, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,245</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                    <Book className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">All listed publications</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+235</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
            </Card>
        </div>
        <div className="mt-8">
            <Card>
                <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
                <CardContent>
                    {/* A table of recent orders would go here */}
                    <p className="text-muted-foreground">Recent orders will be displayed here.</p>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
