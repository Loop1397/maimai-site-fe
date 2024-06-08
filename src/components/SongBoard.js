import SongItem from "./SongItem";

const SongBoard = ({songList}) => {
    return (
        <div>
            {songList.length > 0 ? songList.map((item) => 
                <SongItem item={item}/>
            ): <h2>There is no Song to show</h2>}
        </div>
    );
}

export default SongBoard;