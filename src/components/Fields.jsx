const Field = ({input,remove}) => {
    return (
        <div className="task-list">
          <div className="task">
            <Checkbox {...label} defaultChecked />
            <h3>{input}</h3>
            <button  onClick ={remove} className="delete-button">Delete</button>
          </div>
        </div>
    );
}
export default Field;