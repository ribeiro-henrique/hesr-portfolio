type Props = {
    videoUrl: any | undefined,
    setOpenModal: any
}

export default function VideoModal({ videoUrl, setOpenModal }: Props) {
    return (
        <div className="video-modal-overlay">
            <div className="video-modal-content">

                <button
                    className="video-modal-close rounded-5 px-2 h-auto d-flex"
                    onClick={() => setOpenModal(false)}
                >
                    🗙
                </button>

                <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="Demo video"
                    frameBorder="0"
                    allowFullScreen
                />

            </div>
        </div>
    )
}

