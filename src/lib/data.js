export const categories = [
  "Cardiologist", // Heart specialist
  "Dermatologist", // Skin specialist
  "Neurologist", // Nervous system specialist
  "Pediatrician", // Child specialist
  "Orthopedic Surgeon", // Bone and joint specialist
  "Gynecologist", // Women's health specialist
  "Ophthalmologist", // Eye specialist
  "Psychiatrist", // Mental health specialist
  "Oncologist", // Cancer specialist
  "Endocrinologist", // Hormone and gland specialist
  "Gastroenterologist", // Digestive system specialist
  "Pulmonologist", // Lung specialist
  "Nephrologist", // Kidney specialist
  "Rheumatologist", // Joint, muscle, and autoimmune diseases specialist
  "Allergist", // Allergy specialist
  "Urologist", // Urinary tract specialist
  "Hematologist", // Blood specialist
  "Infectious Disease Specialist", // Infectious diseases specialist
  "Anesthesiologist", // Pain management and anesthesia specialist
  "General Practitioner", // Family or primary care physician
];

export const doctors = [
  {
      id: 1,
      name: "Dr. John Smith",
      appointmentTime: "10:00 AM - 3:00 PM",
      fees: 150,
      category: "Cardiologist",
      hospital: "City Heart Center",
      gender: "Male"
  },
  {
      id: 2,
      name: "Dr. Emily Chen",
      appointmentTime: "1:00 PM - 6:00 PM",
      fees: 120,
      category: "Dermatologist",
      hospital: "SkinCare Clinic",
      gender: "Female"
  },
  {
      id: 3,
      name: "Dr. Sarah Patel",
      appointmentTime: "9:00 AM - 1:00 PM",
      fees: 100,
      category: "Pediatrician",
      hospital: "Children's Health Hospital",
      gender: "Female"
  },
  {
      id: 4,
      name: "Dr. James Brown",
      appointmentTime: "11:00 AM - 4:00 PM",
      fees: 180,
      category: "Orthopedic Surgeon",
      hospital: "OrthoPlus Hospital",
      gender: "Male"
  },
  {
      id: 5,
      name: "Dr. Lisa Nguyen",
      appointmentTime: "2:00 PM - 7:00 PM",
      fees: 130,
      category: "Gynecologist",
      hospital: "Women’s Health Center",
      gender: "Female"
  },
  {
      id: 6,
      name: "Dr. William Lee",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 110,
      category: "Ophthalmologist",
      hospital: "EyeCare Institute",
      gender: "Male"
  },
  {
      id: 7,
      name: "Dr. Karen Alvarez",
      appointmentTime: "10:00 AM - 5:00 PM",
      fees: 140,
      category: "Psychiatrist",
      hospital: "Mind Wellness Center",
      gender: "Female"
  },
  {
      id: 8,
      name: "Dr. Michael Davis",
      appointmentTime: "3:00 PM - 8:00 PM",
      fees: 200,
      category: "Oncologist",
      hospital: "Cancer Care Institute",
      gender: "Male"
  },
  {
      id: 9,
      name: "Dr. Sophia Wilson",
      appointmentTime: "1:00 PM - 6:00 PM",
      fees: 160,
      category: "Endocrinologist",
      hospital: "Hormone Clinic",
      gender: "Female"
  },
  {
      id: 10,
      name: "Dr. Ryan Garcia",
      appointmentTime: "9:00 AM - 2:00 PM",
      fees: 150,
      category: "Gastroenterologist",
      hospital: "Digestive Health Center",
      gender: "Male"
  },
  {
      id: 11,
      name: "Dr. Megan Foster",
      appointmentTime: "11:00 AM - 3:00 PM",
      fees: 125,
      category: "Pulmonologist",
      hospital: "Lung Specialty Clinic",
      gender: "Female"
  },
  {
      id: 12,
      name: "Dr. Andrew Miller",
      appointmentTime: "10:00 AM - 2:00 PM",
      fees: 140,
      category: "Nephrologist",
      hospital: "Kidney Care Hospital",
      gender: "Male"
  },
  {
      id: 13,
      name: "Dr. Rachel Adams",
      appointmentTime: "12:00 PM - 6:00 PM",
      fees: 170,
      category: "Rheumatologist",
      hospital: "Joint & Muscle Center",
      gender: "Female"
  },
  {
      id: 14,
      name: "Dr. Oliver Robinson",
      appointmentTime: "9:00 AM - 1:00 PM",
      fees: 130,
      category: "Allergist",
      hospital: "Allergy Relief Center",
      gender: "Male"
  },
  {
      id: 15,
      name: "Dr. Ava Brooks",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 90,
      category: "General Practitioner",
      hospital: "Community Health Clinic",
      gender: "Female"
  }
];

export const currentUser = {
    name : "moiz",
    role : "doctor",
    email : "moiz@gmail.com",
}


export const appointments = [
    {
        user: {
            name: "Alice Johnson",
            email: "alice.johnson@example.com"
        },
        appointmentTime: "10:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-07",
        doctor: {
            name: "Dr. John Smith",
            category: "Cardiologist",
            hospital: "City Heart Center"
        }
    },
    {
        user: {
            name: "Bob Williams",
            email: "bob.williams@example.com"
        },
        appointmentTime: "2:00 PM",
        status: "Pending",
        appointmentDate: "2024-11-07",
        doctor: {
            name: "Dr. Emily Chen",
            category: "Dermatologist",
            hospital: "SkinCare Clinic"
        }
    },
    {
        user: {
            name: "Charlie Brown",
            email: "charlie.brown@example.com"
        },
        appointmentTime: "9:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-08",
        doctor: {
            name: "Dr. Sarah Patel",
            category: "Pediatrician",
            hospital: "Children's Health Hospital"
        }
    },
    {
        user: {
            name: "Daisy Miller",
            email: "daisy.miller@example.com"
        },
        appointmentTime: "11:00 AM",
        status: "Cancelled",
        appointmentDate: "2024-11-09",
        doctor: {
            name: "Dr. James Brown",
            category: "Orthopedic Surgeon",
            hospital: "OrthoPlus Hospital"
        }
    },
    {
        user: {
            name: "Edward Lee",
            email: "edward.lee@example.com"
        },
        appointmentTime: "3:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-10",
        doctor: {
            name: "Dr. Lisa Nguyen",
            category: "Gynecologist",
            hospital: "Women’s Health Center"
        }
    },
    {
        user: {
            name: "Fiona Clark",
            email: "fiona.clark@example.com"
        },
        appointmentTime: "8:30 AM",
        status: "Pending",
        appointmentDate: "2024-11-10",
        doctor: {
            name: "Dr. William Lee",
            category: "Ophthalmologist",
            hospital: "EyeCare Institute"
        }
    },
    {
        user: {
            name: "George Harris",
            email: "george.harris@example.com"
        },
        appointmentTime: "10:15 AM",
        status: "Confirmed",
        appointmentDate: "2024-11-11",
        doctor: {
            name: "Dr. Karen Alvarez",
            category: "Psychiatrist",
            hospital: "Mind Wellness Center"
        }
    },
    {
        user: {
            name: "Hannah Scott",
            email: "hannah.scott@example.com"
        },
        appointmentTime: "4:00 PM",
        status: "Cancelled",
        appointmentDate: "2024-11-11",
        doctor: {
            name: "Dr. Michael Davis",
            category: "Oncologist",
            hospital: "Cancer Care Institute"
        }
    },
    {
        user: {
            name: "Irene Walker",
            email: "irene.walker@example.com"
        },
        appointmentTime: "1:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-11-12",
        doctor: {
            name: "Dr. Sophia Wilson",
            category: "Endocrinologist",
            hospital: "Hormone Clinic"
        }
    },
    {
        user: {
            name: "Jack Thompson",
            email: "jack.thompson@example.com"
        },
        appointmentTime: "10:00 AM",
        status: "Pending",
        appointmentDate: "2024-11-13",
        doctor: {
            name: "Dr. Ryan Garcia",
            category: "Gastroenterologist",
            hospital: "Digestive Health Center"
        }
    }
  ];
  