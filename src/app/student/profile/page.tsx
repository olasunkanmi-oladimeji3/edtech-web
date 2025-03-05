"use client"

import { useState } from "react"
import { User, Mail, Phone, MapPin, Book, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data - in a real app, this would come from your API
const mockProfileData = {
  name: "Adebayo Ogunlesi",
  email: "adebayo.ogunlesi@example.com",
  phone: "+234 123 456 7890",
  location: "Lagos, Nigeria",
  bio: "Aspiring business leader with a passion for technology and innovation.",
  education: "B.Sc. Business Administration, University of Lagos",
  occupation: "Marketing Associate at TechNaija",
  avatar: "/placeholder.svg?height=128&width=128",
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(mockProfileData)
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the updated profile data to your backend
    console.log("Updated profile:", profileData)
    setIsEditing(false)
  }

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Your Profile</CardTitle>
            <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Cancel" : "Edit Profile"}</Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={profileData.avatar} />
                  <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {isEditing && <Button variant="outline">Change Avatar</Button>}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center">
                    <User className="mr-2 h-4 w-4" /> Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="bio" className="text-sm font-medium">
                    Bio
                  </label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="education" className="text-sm font-medium flex items-center">
                    <Book className="mr-2 h-4 w-4" /> Education
                  </label>
                  <Input
                    id="education"
                    name="education"
                    value={profileData.education}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="occupation" className="text-sm font-medium flex items-center">
                    <Briefcase className="mr-2 h-4 w-4" /> Occupation
                  </label>
                  <Input
                    id="occupation"
                    name="occupation"
                    value={profileData.occupation}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
            {isEditing && (
              <Button type="submit" className="mt-6">
                Save Changes
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

