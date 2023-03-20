import { DragDropContext } from 'react-beautiful-dnd';


import './App.css'
import { SearchBar } from './components/SearchBar';

function App() {
    return (<div className="App">Movie List<div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>
        <DragDropContext>
            


        </DragDropContext>

    </div>
    </div>)

    

    

}




export default App;
