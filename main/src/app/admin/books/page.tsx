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
                            <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dummyBooks.map(book => (
                            <TableRow key={book.id}>
                                <TableCell className="hidden sm:table-cell">
                                    <Image 
                                        alt={book.title} 
                                        className="aspect-square rounded-md object-cover" 
                                        height="64" 
                                        src={book.imageUrl} 
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>Kshs {book.price.toFixed(2)}</TableCell>
                                <TableCell>{book.stock}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
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
