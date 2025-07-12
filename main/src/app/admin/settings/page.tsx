import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Admin Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>M-Pesa Configuration</CardTitle>
          <CardDescription>
            Configure your M-Pesa Till payment settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="till-number">Till Number</Label>
            <Input id="till-number" placeholder="e.g., 123456" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="consumer-key">Consumer Key</Label>
            <Input id="consumer-key" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="consumer-secret">Consumer Secret</Label>
            <Input id="consumer-secret" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
