'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleAuthor } from '../../../../api/authorData';
import AuthorForm from '../../../../components/forms/AuthorForm';

export default function EditAuthor({ params }) {
  const [editItems, setEditItems] = useState({});

  // *grab firebaseKey
  const { firebaseKey } = params;

  // * make api call to get author data
  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setEditItems);
  }, [firebaseKey]);

  // * pass object to form
  return <AuthorForm obj={editItems} />;
}

EditAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
