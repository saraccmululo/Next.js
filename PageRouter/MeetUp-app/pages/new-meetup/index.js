// our-domain.com/new-meetup
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    console.log('Sending data:', enteredMeetupData);
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups!'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  ); 
}

export default NewMeetupPage;