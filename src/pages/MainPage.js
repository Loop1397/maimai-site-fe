import { useState } from "react";
import SongBoard from "../components/SongBoard";

const MainPage = () => {
    const [songList, setSongList] = useState([]);

    const buttonHandler = (event) => {
        event.preventDefault();

        setSongList(['hey', 'ho'])
    }    
    
    return (
        <div>
            Hi React!!
            <button onClick={buttonHandler}>
                버튼
            </button>
            <SongBoard songList = {songList}/>
        </div>
    );
};

export default MainPage;