'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle, UserPlus, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Patient = {
  id: string
  name: string
  age: number
  gender: string
  contactNumber: string
  priority: 'Normal' | 'Emergency'
  symptoms: string
}

export default function Component() {
  const [normalQueue, setNormalQueue] = useState<Patient[]>([])
  const [emergencyQueue, setEmergencyQueue] = useState<Patient[]>([])
  const [newPatient, setNewPatient] = useState<Omit<Patient, 'id'>>({
    name: '',
    age: 0,
    gender: '',
    contactNumber: '',
    priority: 'Normal',
    symptoms: ''
  })
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewPatient(prev => ({ ...prev, [name]: value }))
  }

  const handlePriorityChange = (value: 'Normal' | 'Emergency') => {
    setNewPatient(prev => ({ ...prev, priority: value }))
  }

  const handleAddPatient = () => {
    const patient: Patient = { ...newPatient, id: generateUniqueId() }
    if (patient.priority === 'Emergency') {
      setEmergencyQueue(prev => [...prev, patient])
    } else {
      setNormalQueue(prev => [...prev, patient])
    }
    setNewPatient({
      name: '',
      age: 0,
      gender: '',
      contactNumber: '',
      priority: 'Normal',
      symptoms: ''
    })
  }

  const handleRemovePatient = (queue: 'Normal' | 'Emergency', id: string) => {
    if (queue === 'Normal') {
      setNormalQueue(prev => prev.filter(patient => patient.id !== id))
    } else {
      setEmergencyQueue(prev => prev.filter(patient => patient.id !== id))
    }
  }

  const totalAppointments = normalQueue.length + emergencyQueue.length

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Hospital OPD Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Dashboard Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Total Appointments</h3>
                  <p className="text-3xl font-bold">{totalAppointments}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Waiting List</h3>
                  <div className="flex space-x-4 items-center">
                    <p className='bg-green-100 text-green-500 px-4 py-2 rounded-lg'>Normal: {normalQueue.length}</p>
                    <p className="bg-red-100 text-red-500 px-4 py-2 rounded-lg">Emergency: {emergencyQueue.length}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Add New Patient</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={newPatient.name} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" name="age" type="number" value={newPatient.age} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" name="gender" value={newPatient.gender} onChange={handleInputChange} />
                  </div>
                  <div>
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input id="contactNumber" name="contactNumber" value={newPatient.contactNumber} onChange={handleInputChange} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="symptoms">Symptoms</Label>
                  <textarea
                    id="symptoms"
                    name="symptoms"
                    value={newPatient.symptoms}
                    onChange={handleInputChange}
                    className="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Describe the patient's symptoms..."
                  />
                </div>
                <div>
                  <Label>Priority</Label>
                  <RadioGroup value={newPatient.priority} onValueChange={handlePriorityChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Normal" id="normal" />
                      <Label htmlFor="normal">Normal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Emergency" id="emergency" />
                      <Label htmlFor="emergency">Emergency</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="button" onClick={handleAddPatient}>
                  <UserPlus className="mr-2 h-4 w-4" /> Add Patient
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                Emergency Queue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] lg:h-[300px]">
                {emergencyQueue.map((patient, index) => (
                  <div key={patient.id} className="flex justify-between items-center mb-2 p-2 bg-red-100 rounded">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0" onClick={() => setSelectedPatient(patient)}>
                          <span className="font-bold">{index + 1}. </span>
                          {patient.name} (ID: {patient.id})
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <PatientDetails patient={selectedPatient} />
                      </DialogContent>
                    </Dialog>
                    <Button variant="destructive" size="sm" onClick={() => handleRemovePatient('Emergency', patient.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Normal Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] lg:h-[300px]">
                {normalQueue.map((patient, index) => (
                  <div key={patient.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="p-0" onClick={() => setSelectedPatient(patient)}>
                          <span className="font-bold">{index + 1}. </span>
                          {patient.name} (ID: {patient.id})
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <PatientDetails patient={selectedPatient} />
                      </DialogContent>
                    </Dialog>
                    <Button variant="destructive" size="sm" onClick={() => handleRemovePatient('Normal', patient.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function PatientDetails({ patient }: { patient: Patient | null }) {
  if (!patient) return null

  return (
    <>
      <DialogHeader>
        <DialogTitle>Patient Details</DialogTitle>
        <DialogDescription>ID: {patient.id}</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value={patient.name} className="col-span-3" readOnly />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="age" className="text-right">
            Age
          </Label>
          <Input id="age" value={patient.age} className="col-span-3" readOnly />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="gender" className="text-right">
            Gender
          </Label>
          <Input id="gender" value={patient.gender} className="col-span-3" readOnly />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="contact" className="text-right">
            Contact
          </Label>
          <Input id="contact" value={patient.contactNumber} className="col-span-3" readOnly />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="priority" className="text-right">
            Priority
          </Label>
          <Input id="priority" value={patient.priority} className="col-span-3" readOnly />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="symptoms" className="text-right">
            Symptoms
          </Label>
          <textarea
            id="symptoms"
            value={patient.symptoms}
            className="col-span-3 w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            readOnly
          />
        </div>
      </div>
    </>
  )
}