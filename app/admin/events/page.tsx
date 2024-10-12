"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const events = [
  {
    id: "1",
    name: "Tech Conference 2023",
    description: "Annual technology conference",
    date: "2023-09-15",
    status: "Approved",
  },
  {
    id: "2",
    name: "Music Festival",
    description: "Three-day music festival",
    date: "2023-10-01",
    status: "Pending",
  },
  {
    id: "3",
    name: "Art Exhibition",
    description: "Contemporary art showcase",
    date: "2023-09-22",
    status: "Approved",
  },
  {
    id: "4",
    name: "Food Tasting Event",
    description: "Culinary experience with local chefs",
    date: "2023-09-30",
    status: "Pending",
  },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleApprove = (id) => {
    console.log(`Approve event ${id}`)
    // Implement approval logic here
  }

  const handleDelete = (id) => {
    console.log(`Delete event ${id}`)
    // Implement delete logic here
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Events</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.name}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.status}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => setSelectedEvent(event)}
                >
                  View
                </Button>
                {event.status === "Pending" && (
                  <Button
                    variant="default"
                    className="mr-2"
                    onClick={() => handleApprove(event.id)}
                  >
                    Approve
                  </Button>
                )}
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEvent?.name}</DialogTitle>
            <DialogDescription>
              <p><strong>Date:</strong> {selectedEvent?.date}</p>
              <p><strong>Status:</strong> {selectedEvent?.status}</p>
              <p><strong>Description:</strong> {selectedEvent?.description}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}