import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Component({ params }: { params: { slug: string } }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Key information at a glance</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Admitted Patients</div>
              <div className="text-2xl font-bold">245</div>
            </div>
            <Button variant="outline" size="sm">
              View Admitted Patients
            </Button>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Inventory</div>
              <div className="text-2xl font-bold">
                <span className="text-red-500">12</span> / 45
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Inventory
            </Button>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Available Medications</div>
              <div className="text-2xl font-bold">78</div>
            </div>
            <Button variant="outline" size="sm">
              View Medications
            </Button>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Available Beds</div>
              <div className="text-2xl font-bold">
                <span className="text-green-500">25</span> / 50
              </div>
            </div>
            <Button variant="outline" size="sm">
              View Bed Availability
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Button size="sm">Admit New Patient</Button>
          <Button size="sm">Order Supplies</Button>
          <Button size="sm">Request Medication Refill</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Admitted Patients</CardTitle>
          <CardDescription>Recent admissions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Admission Date</TableHead>
                <TableHead>Diagnosis</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>2023-05-15</TableCell>
                <TableCell>Pneumonia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>2023-05-12</TableCell>
                <TableCell>Appendicitis</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Michael Johnson</TableCell>
                <TableCell>2023-05-10</TableCell>
                <TableCell>Broken Leg</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Inventory</CardTitle>
          <CardDescription>Current stock levels</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Surgical Masks</TableCell>
                <TableCell>120</TableCell>
                <TableCell>
                  <Badge variant="secondary">Low</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nitrile Gloves</TableCell>
                <TableCell>300</TableCell>
                <TableCell>
                  <Badge variant="outline">Adequate</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bandages</TableCell>
                <TableCell>50</TableCell>
                <TableCell>
                  <Badge variant="secondary">Low</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Available Medications</CardTitle>
          <CardDescription>In-stock medications</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medication</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Expiration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Ibuprofen</TableCell>
                <TableCell>500</TableCell>
                <TableCell>2024-06-30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Amoxicillin</TableCell>
                <TableCell>300</TableCell>
                <TableCell>2023-12-31</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Acetaminophen</TableCell>
                <TableCell>200</TableCell>
                <TableCell>2024-03-15</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Available Beds</CardTitle>
          <CardDescription>Current bed capacity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div>General Wards</div>
              <div className="text-2xl font-bold">
                <span className="text-green-500">20</span> / 30
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>ICU</div>
              <div className="text-2xl font-bold">
                <span className="text-yellow-500">5</span> / 10
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
