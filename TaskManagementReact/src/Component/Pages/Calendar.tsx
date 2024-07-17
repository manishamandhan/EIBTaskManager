import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import { FormControl, FormHelperText, Grid, InputLabel, TextField, Card, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  description: string;
  color: string;
}

export const Calendar: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [task, setTask] = useState<string>("");
  const [taskStartDate, setTaskStartDate] = useState<string>("");
  const [taskEndDate, setTaskEndDate] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [filterStartDate, setFilterStartDate] = useState<string>("");
  const [filterEndDate, setFilterEndDate] = useState<string>("");

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task && taskStartDate) {
      const color = task.toLowerCase().includes("meeting") ? "red" : "green";
      setEvents([
        ...events,
        {
          id: new Date().toISOString(),
          title: task,
          start: taskStartDate,
          end: taskEndDate ? taskEndDate : undefined,
          description: taskDescription,
          color,
        },
      ]);
      setTask("");
      setTaskStartDate("");
      setTaskEndDate("");
      setTaskDescription("");
    }
  };

  const handleEventClick = (info: any) => {
    const event = events.find((evt) => evt.id === info.event.id);
    setSelectedEvent(event || null);
    setShowModal(true);
  };

  const handleEventDelete = (id: string) => {
    setEvents(events.filter((evt) => evt.id !== id));
    setShowModal(false);
  };

  const filteredEvents = events.filter((event) => {
    if (filterStartDate && new Date(event.start) < new Date(filterStartDate)) return false;
    if (filterEndDate && new Date(event.start) > new Date(filterEndDate)) return false;
    return true;
  });

  return (
    <div className="container-fluid">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <Card variant="outlined" className="mb-4">
              <Form onSubmit={handleTaskSubmit} className="p-4">
                <div className="card-title mb-2">Add Task</div>
                <FormControl fullWidth className="mb-3">
                  <FormHelperText>Start Date</FormHelperText>
                  <TextField type="date" fullWidth value={taskStartDate} onChange={(e) => setTaskStartDate(e.target.value)} required />
                </FormControl>
                <FormControl fullWidth className="mb-3">
                  <FormHelperText>End Date (optional)</FormHelperText>
                  <TextField type="date" fullWidth value={taskEndDate} onChange={(e) => setTaskEndDate(e.target.value)} />
                </FormControl>
                <FormControl fullWidth className="mb-3">
                  <FormHelperText>Task Note</FormHelperText>
                  <TextField type="text" fullWidth placeholder="Task Note" value={task} onChange={(e) => setTask(e.target.value)} required />
                </FormControl>
                <FormControl fullWidth className="mb-3">
                  <FormHelperText>Description</FormHelperText>
                  <TextField type="text" fullWidth placeholder="Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                </FormControl>
                <Button className="main-btn" type="submit">
                  Add Task
                </Button>
              </Form>
            </Card>
            <Card variant="outlined" className="mb-4">
              <Form className="p-4">
                <div className="card-title  mb-2">Filter Events</div>
                <FormControl fullWidth className="mb-3">
                  <FormHelperText>Start Date</FormHelperText>
                  <TextField fullWidth type="date" value={filterStartDate} onChange={(e) => setFilterStartDate(e.target.value)} />
                </FormControl>
                <FormControl fullWidth className="mb-3">
                  <FormHelperText>End Date</FormHelperText>
                  <TextField fullWidth type="date" value={filterEndDate} onChange={(e) => setFilterEndDate(e.target.value)} />
                </FormControl>
              </Form>
            </Card>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Card variant="outlined" className="mb-4">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                events={filteredEvents}
                eventClick={handleEventClick}
                height={"80vh"}
                eventContent={(eventInfo) => (
                  <div>
                    <b>{eventInfo.timeText}</b>
                    <i>{eventInfo.event.title}</i>
                  </div>
                )}
              />
            </Card>
          </Grid>
        </Grid>
      </LocalizationProvider>
      {selectedEvent && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedEvent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Typography variant="body1">{selectedEvent.description}</Typography>
            <Typography variant="body2">Start Date: {selectedEvent.start}</Typography>
            {selectedEvent.end && <Typography variant="body2">End Date: {selectedEvent.end}</Typography>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="danger" onClick={() => handleEventDelete(selectedEvent.id)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};
