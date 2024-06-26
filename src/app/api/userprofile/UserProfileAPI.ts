import connection from "@/app/api/supabase/SupabaseContextProvider";
import {UserProfileType} from "@/app/constants/types";

const supabase = connection;

export const getUserSession = async () => {
    const res = await supabase.auth.getSession()
    return res.data.session
}
export const submitUserProfile = async (userProfile:UserProfileType) => {
    supabase
        .from('UserProfile')
        .upsert([userProfile])
        .then(res => {
            console.log(res)
            window.location.reload()
        })
}

export const submitUserProfileNoReload = async (userProfile:UserProfileType) => {
    await supabase
        .from('UserProfile')
        .upsert([userProfile])
        .then(res => {
            console.log(res)
        })
}

export const getUserProfileById = async (id: string)  => {
    const {data, error} = await supabase
        .from('UserProfile')
        .select('*')
        .eq('id', id)
    return {data, error}
}

export const uploadProfilePicture = async (profilePictureFile: File, fileName: string) => {
    await supabase
        .storage
        .from('profile_picture_bucket')
        .upload(fileName, profilePictureFile, {
            cacheControl: '3600',
            upsert: true
        })
        .catch(console.error)
}

export const getProfilePictureURL = async (fileName: string)=> {
    const {data} =  supabase
        .storage
        .from('profile_picture_bucket')
        .getPublicUrl(fileName)
    return data.publicUrl
}
