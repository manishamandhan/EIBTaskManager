import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Button, Form, Card, Row, Col } from 'react-bootstrap';
import { FormHelperText, TextField } from '@mui/material';

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
    const [task, setTask] = useState<string>('');
    const [taskStartDate, setTaskStartDate] = useState<string>('');
    const [taskEndDate, setTaskEndDate] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [filterStartDate, setFilterStartDate] = useState<string>('');
    const [filterEndDate, setFilterEndDate] = useState<string>('');

    const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task && taskStartDate) {
            const color = task.toLowerCase().includes('meeting') ? 'red' : 'green';
            setEvents([
                ...events,
                { 
                    id: new Date().toISOString(), 
                    title: task, 
                    start: taskStartDate, 
                    end: taskEndDate ? taskEndDate : undefined, 
                    description: taskDescription, 
                    color 
                },
            ]);
            setTask('');
            setTaskStartDate('');
            setTaskEndDate('');
            setTaskDescription('');
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
            <div className='row'>
                <Row>
                    <Col xl={3} lg={12} md={12}>
                        <div className="mb-4 Card-static">
                            <div>
                                <div className='card-title'>Add Task</div>
                                <Form onSubmit={handleTaskSubmit}>
                                    <div className="mb-3">
                                        <FormHelperText>Start Date</FormHelperText>
                                        <TextField
                                            type="date"
                                            fullWidth
                                            value={taskStartDate}
                                            onChange={(e) => setTaskStartDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <FormHelperText>End Date (optional)</FormHelperText>
                                        <TextField
                                            type="date"
                                            fullWidth
                                            value={taskEndDate}
                                            onChange={(e) => setTaskEndDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <FormHelperText>Task Note</FormHelperText>
                                        <TextField
                                            type="text"
                                            fullWidth
                                            placeholder="Task Note"
                                            value={task}
                                            onChange={(e) => setTask(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <FormHelperText>Description</FormHelperText>
                                        <TextField
                                            type="text"
                                            fullWidth
                                            placeholder="Description"
                                            value={taskDescription}
                                            onChange={(e) => setTaskDescription(e.target.value)}
                                        />
                                    </div>
                                    <Button className='main-btn' type="submit">Add Task</Button>
                                </Form>
                            </div>
                        </div>
                        <div className="mb-4 Card-static">
                            <div>
                                <Card.Title>Filter Events</Card.Title>
                                <Form>
                                    <div className="mb-3">
                                        <FormHelperText>Start Date</FormHelperText>
                                        <TextField
                                            fullWidth
                                            type="date"
                                            value={filterStartDate}
                                            onChange={(e) => setFilterStartDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <FormHelperText>End Date</FormHelperText>
                                        <TextField
                                            fullWidth
                                            type="date"
                                            value={filterEndDate}
                                            onChange={(e) => setFilterEndDate(e.target.value)}
                                        />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col xl={9} lg={12} md={12}>
                        <div className="mb-4">
                            <div className='Card-static'>
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {selectedEvent && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <div className='card-title'>{selectedEvent.title}</div>
                    </Modal.Header>
                    <div className='p-3'>
                        <p>{selectedEvent.description}</p>
                        <p>Start Date: {selectedEvent.start}</p>
                        {selectedEvent.end && <p>End Date: {selectedEvent.end}</p>}
                    </div>
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
