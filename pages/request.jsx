import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import toast from 'react-hot-toast';
import 'firebase/database';

export default function RequestBookPage() {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const formProps = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 200,
  });

  const inputProps = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 400,
  });

  const labelProps = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    delay: 600,
  });

  const buttonProps = useSpring({
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    delay: 800,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const request = {
        bookTitle,
        author,
        description,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      const res = await fetch(
        'https://rebook-b31a8-default-rtdb.firebaseio.com/Request.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(request),
        }
      );
      if (res.ok) {
        setBookTitle('');
        setAuthor('');
        setDescription('');
        setIsSubmitting(false);
        toast.success('Form Submitted. Your Book Request Will Be Checked');
      } else {
        setIsSubmitting(false);
        toast.error('Please Fill The Form Correctly');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: `url("/formbg8.jpg")`,
        // backgroundColor: 'lightskyblue',
        backgroundSize: 'cover',
      }}
    >
      <animated.form
        style={{
          ...formProps,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // backgroundColor: 'white',
          backgroundImage: `url("/formbg8.jpg")`,
          justifyContent: 'center',
          height: '100%',
          borderRadius: '8px',
          borderColor: 'black',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          maxWidth: '400px',
          width: '100%',
        }}
        onSubmit={handleSubmit}
      >
        <label style={labelProps} htmlFor="bookTitle">
          Book Title
        </label>
        <animated.input
          style={{
            ...inputProps,
            margin: 'auto',
            border: '2px solid black',
          }}
          type="text"
          name="bookTitle"
          id="bookTitle"
          value={bookTitle}
          onChange={(event) => setBookTitle(event.target.value)}
          required
        />
    
        <label style={labelProps} htmlFor="author">
          Author
        </label>
        <animated.input
          style={{
            ...inputProps,
            margin: 'auto',
            border: '2px solid black',
          }}
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
    
        <label style={labelProps} htmlFor="description">
          Description
        </label>
        <animated.textarea
          style={{
            ...inputProps,
            margin: 'auto',
            border: '2px solid black',
          }}
          name="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
    
        <animated.button
          style={{
            ...buttonProps,
            marginTop: '32px',
            padding: '16px 32px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#FF6600',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </animated.button>
      </animated.form>
    </div>
    );
  }    