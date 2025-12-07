import React from 'react'
interface VideoType {
    video?: string
}
function VideoPlayer({ video }: VideoType) {
    return (
        <>
            {video ? (
                <div className="w-full flex">
                    <iframe
                        className="w-full max-h-[400px] aspect-video"
                        src={`${video}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div className='w-full h-[400px] flex items-center justify-center border border-gray-200 rounded'>
                    <p className='text-2xl font-bold capitalize'>no video available</p>
                </div>
            )}
        </>
    )

}

export default VideoPlayer