import React from "react";

export default class Playlist extends React.Component {
    componentDidMount = () => {
        this.props.getAllPlaylists()
    }
    render() {
        const { playlistProps } = this.props
        return (
            <>
                {playlistProps.map(playlist => {
                    return <p>{playlist.name}</p>
                })}
            </>
        )
    }
}