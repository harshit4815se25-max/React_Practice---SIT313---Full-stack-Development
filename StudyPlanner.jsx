import { useRef, useState } from 'react';

function StudyPlanner() {
  const taskInput = useRef(null);

  const [activities, setActivities] = useState([]);

  const addActivity = () => {
    const value = taskInput.current.value.trim();

    if (value === '') {
      return;
    }

    const newActivity = {
      id: Date.now(),
      title: value,
      completed: false
    };

    setActivities([...activities, newActivity]);

    taskInput.current.value = '';
    taskInput.current.focus();
  };

  const toggleActivity = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              completed: !activity.completed
            }
          : activity
      )
    );
  };

  const deleteActivity = (id) => {
    setActivities(
      activities.filter(
        (activity) => activity.id !== id
      )
    );
  };

  return (
    <section className="card">
      <h1>Study Planner</h1>

      <p className="description">
        Create and manage your study activities.
      </p>

      <div className="planner-input">
        <input
          ref={taskInput}
          type="text"
          placeholder="Enter a study activity"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addActivity();
            }
          }}
        />

        <button onClick={addActivity}>
          Add Activity
        </button>
      </div>

      <div className="activity-list">
        {activities.length === 0 ? (
          <p className="empty-message">
            No activities added yet.
          </p>
        ) : (
          activities.map((activity) => (
            <div
              className={
                activity.completed
                  ? 'activity completed'
                  : 'activity'
              }
              key={activity.id}
            >
              <span
                onClick={() =>
                  toggleActivity(activity.id)
                }
              >
                {activity.title}
              </span>

              <button
                className="delete-button"
                onClick={() =>
                  deleteActivity(activity.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <p className="activity-count">
        Total activities: {activities.length}
      </p>
    </section>
  );
}

export default StudyPlanner;