/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAuthor } from '../../api/authorData';
import { useAuth } from '../../utils/context/authContext';
import AuthorCard from '../../components/AuthorCard';

function AuthorPage() {
  // todo: set state for authors
  const [Author, setAuthor] = useState([]);

  // todo: Get user id usinf useAuth Hook
  const { user } = useAuth();

  // todo: create function that makes the api call to get all authors
  const getAllTheAuthor = () => {
    getAuthor(user.uid).then(setAuthor);
  };

  // todo: make the api call to get all the authornon component render
  useEffect(() => {
    getAllTheAuthor();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/author/new" passHref>
        <Button>Add Author</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {}
        {Author.map((author) => (
          <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthor} />
        ))}
      </div>
    </div>
  );
}
export default AuthorPage;
