"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dummyOrders } from "@/lib/data";

export default function AdminOrdersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage Orders</CardTitle>
                <CardDescription>View customer orders and update their status.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="hidden md:table-cell">Customer</TableHead>
                                <TableHead>Total</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {dummyOrders.map(order => (
                                <TableRow key={order.id} className="text-xs sm:text-sm">
                                    <TableCell className="font-medium p-2">{order.id}</TableCell>
                                    <TableCell className="hidden md:table-cell p-2">{order.date}</TableCell>
                                    <TableCell className="hidden md:table-cell p-2">Valued Customer</TableCell>
                                    <TableCell className="p-2">Kshs {order.total.toFixed(2)}</TableCell>
                                    <TableCell className="p-2">
                                        <Select defaultValue={order.status} >
                                            <SelectTrigger className="w-[120px]">
                                                <SelectValue placeholder="Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Placed">Placed</SelectItem>
                                                <SelectItem value="Processing">Processing</SelectItem>
                                                <SelectItem value="Shipped">Shipped</SelectItem>
                                                <SelectItem value="Delivered">Delivered</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}
