import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Alerte {
    numero_alerte: string;
    date_creation: string;
    commune: string;
    numero_affaire: string;
}

export interface Operation {
    id_operation: string;
    numero: string;
    date_creation: string;
    nature_de_fait_label: string;
}

export interface Crss {
    id_operation: string;
    numero_operation: string;
    numero_affaire: string;
    commune: string;
    thematique_principale: string;
    date_debut_operation: string;
}