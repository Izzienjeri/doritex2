import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dummyBooks } from "@/lib/data";
import Image from "next/image";

export default function AdminBooksPage() {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Manage Books</CardTitle>
                        <CardDescription>Add, edit, or delete publications.</CardDescription>
                    </div>
                    <Button>Add New Book</Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[80px] sm:table-cell">Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Author</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dummyBooks.map(book => (
                            <TableRow key={book.id} className="text-xs sm:text-sm">
                                <TableCell className="hidden sm:table-cell p-2">
                                    <Image 
                                        alt={book.title} 
                                        className="aspect-square rounded-md object-cover" 
                                        height="64" 
                                        src={book.imageUrl} 
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium p-2">{book.title}</TableCell>
                                <TableCell className="hidden md:table-cell p-2">{book.author}</TableCell>
                                <TableCell className="p-2">Kshs {book.price.toFixed(2)}</TableCell>
                                <TableCell className="p-2">{book.stock}</TableCell>
                                <TableCell className="p-2">
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <Button variant="outline" size="sm">Edit</Button>
                                        <Button variant="destructive" size="sm">Delete</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
