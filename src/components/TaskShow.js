function TaskShow({ task }) {
  return (
    <div className="taskShowDiv">
      <h3 className="taskTitle">Göreviniz</h3>
      <p>{task.title}</p>
      <h3 className="taskTitle">Yapılacaklar</h3>
      <p>{task.taskDesc} </p>
      <div>
        <button className="taskDeleteButton">Sil</button>
        <button className="taskEditButton">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
