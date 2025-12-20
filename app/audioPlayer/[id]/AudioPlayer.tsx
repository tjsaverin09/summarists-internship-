export default function AudioPlayer() {
    return (
        <div className="audioPlayer">
            <div className="audioDetails">
                <div className="audioDetailImg"></div>
                <div className="audioDetailsText">
                    <div className="audioTitle">

                    </div>
                    <div className="audioAuthor">

                    </div>
                </div>
            </div>
            <div className="audioControls">
                <div className="forwardControl">

                </div>
                <div className="playControl"></div>
                <div className="rewindControl"></div>
            </div>
            <div className="audioTimeSlider">
                <div className="audioBaseTime">

                </div>
                <div className="audioSlider"></div>
                <div className="audioEndTime"></div>
            </div>
        </div>
    )
}