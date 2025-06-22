export type User = {
    id?: number;
    username: string;
    email: string;
    password: string;
    role: Role;

}

export type Comment = {
    id?: number;
    user?: User;
    chapter?: Chapter;
    content?: string;
    parentComment?: Comment;
    replies?: Comment[];
    createdAt?: Date;
    updatedAt?: Date;
    isEdited?: boolean;
}

export type Chapter = {
    id?: number;
    chapterNumber: number;
    chapterCoverHash: string;
    chapterTitle: string;
    chapterDescription: string;
    chapterImagesHash: string;
    chapterType: string;
    chapterReleaseDate: Date
}

export type ImgurResponse = {
    status: number;
    success: boolean;
    data: ImgurImage[];
}

export type ImgurImage = {
    id: string;
    deletehash: string;
    account_id: number;
    account_url: string | null;
    ad_type: number | null;
    ad_url: string | null;
    title: string | null;
    description: string | null;
    name: string;
    type: string;
    width: number;
    height: number;
    size: number;
    views: number;
    section: string | null;
    vote: string | null;
    bandwidth: number;
    animated: boolean;
    favorite: boolean;
    in_gallery: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    is_ad: boolean;
    nsfw: boolean | null;
    link: string;
    tags: string[];
    datetime: number;
    mp4: string;
    hls: string;
}

export type Role = 'Admin' | 'User';
