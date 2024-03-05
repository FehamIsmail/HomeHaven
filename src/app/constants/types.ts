
export enum UserType {
    RENTER = "RENTER",
    OWNER = "OWNER",
    COMPANY = "COMPANY"
}
export interface UserProfileType {
    id?: string;
    first_name?: string;
    last_name?: string;
    contact_email?: string;
    phone_number?: number;
    profile_picture?: string;
    role?: string;
}

export interface PropertyType {
    id: number;
    name: string;
    address: string;
    company_id: string;
}

export interface CompanyType {
    id?: string;
    name?: string;
    phone_number?: number;
    email?: string;
}

export interface ParkingSpotType {
    id: number;
    fee: number;
    unit_id: number;
}

export interface LockerType {
    id: number;
    fee: number;
    unit_id: number;
}

export interface CondoUnitType {
    id: string;
    name: string;
    number: number;
    description?: string;
    fee: number;
    size: number;
    registration_key?: string;
    occupied_by?: string; // Foreign key to UserProfile
    property_id: string; // Foreign key to Property
    property: PropertyType;
    parking_spots: ParkingSpotType[];
    lockers: LockerType[];
}

// Other types
export interface HeaderType {
    name: string;
    key: string;
}