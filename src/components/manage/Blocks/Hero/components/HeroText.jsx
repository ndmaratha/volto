import React from 'react';
import cx from 'classnames';
import { defineMessages, useIntl } from 'react-intl';

import {
  useFormFocusTrap,
  TextLineInput,
  LinkMore,
} from '@plone/volto/components';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
});

const HeroText = (props) => {
  const { data, isEditMode, withBackgroundImage, properties } = props;

  const fields = ['title', 'description'];

  const intl = useIntl();
  const getFocusTrapProps = useFormFocusTrap(fields, props);

  return (
    <div
      className={cx(
        'hero-body',
        withBackgroundImage && data.url ? 'withBackgroundImage' : '',
      )}
    >
      <div className="hero-text">
        {isEditMode ? (
          <>
            <TextLineInput
              id="title"
              as="h2"
              className="title-editor"
              fieldDataName="title"
              placeholder={intl.formatMessage(messages.title)}
              properties={properties}
              value={data.title}
              {...getFocusTrapProps(0)}
            />
            <TextLineInput
              id="description"
              as="p"
              className="description-editor"
              value={data.description}
              placeholder={intl.formatMessage(messages.description)}
              {...getFocusTrapProps(1)}
            />
          </>
        ) : (
          <>
            {data.title && <h1>{data.title}</h1>}
            {data.description && <p>{data.description}</p>}
          </>
        )}
      </div>
      <LinkMore data={data} isEditMode={isEditMode} />
    </div>
  );
};

export default HeroText;