"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Search, Download, Filter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MentorTable() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock mentor data
  const mentors = [
    {
      id: "MEN001",
      name: "Dr. Priya Sharma",
      specialization: "Mathematics",
      region: "Delhi",
      languages: "Hindi, English",
      joinedDate: "10 Jan 2023",
      students: 15,
      status: "Active",
    },
    {
      id: "MEN002",
      name: "Prof. Rajesh Kumar",
      specialization: "Science",
      region: "Mumbai",
      languages: "Marathi, English",
      joinedDate: "15 Feb 2023",
      students: 12,
      status: "Active",
    },
    {
      id: "MEN003",
      name: "Anita Desai",
      specialization: "Hindi",
      region: "Uttar Pradesh",
      languages: "Hindi, Urdu",
      joinedDate: "22 Mar 2023",
      students: 18,
      status: "Active",
    },
    {
      id: "MEN004",
      name: "Suresh Menon",
      specialization: "Social Studies",
      region: "Kerala",
      languages: "Malayalam, English",
      joinedDate: "5 Apr 2023",
      students: 10,
      status: "Inactive",
    },
    {
      id: "MEN005",
      name: "Dr. Lakshmi Rao",
      specialization: "Computer Science",
      region: "Bangalore",
      languages: "Kannada, English",
      joinedDate: "18 May 2023",
      students: 14,
      status: "Active",
    },
  ]

  // Filter mentors based on search query
  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.region.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search mentors..."
              className="w-[300px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Specialization</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Languages</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMentors.map((mentor) => (
              <TableRow key={mentor.id}>
                <TableCell>{mentor.id}</TableCell>
                <TableCell className="font-medium">{mentor.name}</TableCell>
                <TableCell>{mentor.specialization}</TableCell>
                <TableCell>{mentor.region}</TableCell>
                <TableCell>{mentor.languages}</TableCell>
                <TableCell>{mentor.joinedDate}</TableCell>
                <TableCell>{mentor.students}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      mentor.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {mentor.status}
                  </span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>View Students</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
