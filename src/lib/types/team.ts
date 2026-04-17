export interface TeamResponse {
  team: {
    section: { title: string; subtitle: string; description: string } | null;
    members: TeamMember[];
  };
  benefits: null;
}

export interface TeamMember {
  id: number;
  name: string;
  specialization: string;
  avatar: string;
  bio: string;
  achievements: string[];
  order: number;
}

export interface TeamMemberDetail extends TeamMember {
  skills: { name: string; percentage: number }[];
  awards: string[];
  socialLinks: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
  };
  experience: string;
  email?: string;
}
