"use client";

import { useEffect, useState } from "react";
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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  const [activePage, setActivePage] = useState("dashboard");
  const [admittedPatients, setAdmittedPatients] = useState<
    | null
    | {
        id: string;
        name: string | null;
        age: number | null;
        gender: string | null;
        address: string | null;
        diagnosis: string | null;
        currentHospital: string | null;
        contact: string | null;
        admissionDate: Date;
      }[]
  >(null);

  useEffect(() => {
    const fetchAdmittedPatients = async () => {
      try {
        const response = await fetch("/api/patients");
        if (response.ok) {
          const data = await response.json();
          setAdmittedPatients(data);
        } else {
          console.error("Failed to fetch patients");
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchAdmittedPatients();
  }, []);

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        {activePage === "dashboard" && (
          <section className="p-4 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Key information at a glance</p>
            <div className="flex items-center justify-between mt-4 space-x-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">
                  {admittedPatients ? admittedPatients.length : 0}
                </span>
                <span>Admitted Patients</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-red-500">12 / 45</span>
                <span>Inventory</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">78</span>
                <span>Available Medications</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-green-500">
                  25 / 50
                </span>
                <span>Available Beds</span>
              </div>
            </div>
            <div className="flex justify-between mt-4 space-x-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handlePageChange("admittedPatients")}
              >
                View Admitted Patients
              </Button>
              <Link href="/Inventory" className="w-full">
                <Button variant="outline" className="w-full">
                  View Inventory
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handlePageChange("availableMedications")}
              >
                View Available Medications
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handlePageChange("availableBeds")}
              >
                View Available Beds
              </Button>
            </div>
          </section>
        )}
        {activePage === "admittedPatients" && (
          <section className="p-4 bg-white rounded-md shadow-md">
            <h1 className="text-2xl font-bold">Admitted Patients</h1>
            <p className="text-muted-foreground">
              All patients currently admitted
            </p>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Admission Date</TableHead>
                    <TableHead>Diagnosis</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admittedPatients &&
                    admittedPatients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell>
                          {new Date(patient.admissionDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{patient.diagnosis}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-between mt-4 space-x-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handlePageChange("dashboard")}
              >
                Back to Dashboard
              </Button>
            </div>
          </section>
        )}
        {/* Other pages go here */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/AddPatient">
                <Button className="w-full">Admit New Patient</Button>
              </Link>
              <Button className="w-full">Order Supplies</Button>
              <Button className="w-full">Request Medication Refill</Button>
            </CardContent>
          </Card>
          {activePage === "dashboard" && (
            <Card>
              <CardHeader>
                <CardTitle>Admitted Patients</CardTitle>
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
          )}
          {activePage === "dashboard" && (
            <Card>
              <CardHeader>
                <CardTitle>Inventory</CardTitle>
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
                        <Badge variant="destructive">Low</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Nitrile Gloves</TableCell>
                      <TableCell>300</TableCell>
                      <TableCell>
                        <Badge variant="default">Adequate</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bandages</TableCell>
                      <TableCell>50</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Low</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          {activePage === "dashboard" && (
            <Card>
              <CardHeader>
                <CardTitle>Available Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Medication</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ibuprofen</TableCell>
                      <TableCell>200</TableCell>
                      <TableCell>
                        <Badge variant="default">In Stock</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Paracetamol</TableCell>
                      <TableCell>150</TableCell>
                      <TableCell>
                        <Badge variant="default">In Stock</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Amoxicillin</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>
                        <Badge variant="destructive">Low</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          {activePage === "dashboard" && (
            <Card>
              <CardHeader>
                <CardTitle>Available Beds</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ward</TableHead>
                      <TableHead>Available Beds</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Ward A</TableCell>
                      <TableCell>15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ward B</TableCell>
                      <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ward C</TableCell>
                      <TableCell>10</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
