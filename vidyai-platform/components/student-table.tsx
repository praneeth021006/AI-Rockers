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

export function StudentTable() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock student data
  const students = [
    {
      id: "STU001",
      name: "Rahul Sharma",
      class: "8",
      region: "Delhi",
      language: "Hindi",
      joinedDate: "12 Jan 2023",
      progress: "78%",
      status: "Active",
    },
    {
      id: "STU002",
      name: "Priya Patel",
      class: "7",
      region: "Gujarat",
      language: "Gujarati",
      joinedDate: "23 Feb 2023",
      progress: "92%",
      status: "Active",
    },
    {
      id: "STU003",
      name: "Amit Kumar",
      class: "9",
      region: "Bihar",
      language: "Hindi",
      joinedDate: "5 Mar 2023",
      progress: "65%",
      status: "Active",
    },
    {
      id: "STU004",
      name: "Sneha Reddy",
      class: "8",
      region: "Telangana",
      language: "Telugu",
      joinedDate: "18 Apr 2023",
      progress: "85%",
      status: "Active",
    },
    {
      id: "STU005",
      name: "Mohammed Ali",
      class: "6",
      region: "Kerala",
      language: "Malayalam",
      joinedDate: "30 May 2023",
      progress: "72%",
      status: "Inactive",
    },
  ]

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.region.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search students..."
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
              <TableHead>Class</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.region}</TableCell>
                <TableCell>{student.language}</TableCell>
                <TableCell>{student.joinedDate}</TableCell>
                <TableCell>{student.progress}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {student.status}
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
                      <DropdownMenuItem>View Progress</DropdownMenuItem>
                      <DropdownMenuItem>Assign Mentor</DropdownMenuItem>
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
