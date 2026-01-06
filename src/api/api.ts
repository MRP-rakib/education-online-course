// export const API = async(endpoint:string,options:RequestInit)=>{
//     const url = 'http://127.0.0.1:8000/api/'
//     try {
//         const res = await fetch(url+endpoint,options)
//         const data = res.json()
//         if(!res.ok) throw new Error('api fetching failed')
//         return data    
        
//     } catch (error) {
//         throw error
//     }
// }
export const API = async(endpoint:string,options:RequestInit)=>{
    const url = 'https://education-backend-qb9u.onrender.com/api/'
    try {
        const res = await fetch(url+endpoint,options)
        const data = res.json()
        if(!res.ok) throw new Error('api fetching failed')
        return data    
        
    } catch (error) {
        throw error
    }
}