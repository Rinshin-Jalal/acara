import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentEvents = [
  {
    id: "1",
    name: "Tech Conference 2023",
    date: "2023-09-15",
    status: "Approved",
  },
  {
    id: "2",
    name: "Music Festival",
    date: "2023-10-01",
    status: "Pending",
  },
  {
    id: "3",
    name: "Art Exhibition",
    date: "2023-09-22",
    status: "Approved",
  },
  {
    id: "4",
    name: "Food Tasting Event",
    date: "2023-09-30",
    status: "Pending",
  },
]

export function RecentEvents() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentEvents.map((event) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">{event.name}</TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>{event.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}