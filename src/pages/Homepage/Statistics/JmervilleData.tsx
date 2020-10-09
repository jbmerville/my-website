import { useQuery } from '@apollo/client';
import { ALL_QUERY } from 'api';
import { StyledText } from 'components';
import { useTheme } from 'hooks';
import moment from 'moment';
import React from 'react';
import { Colors, repoLinesStats } from 'values';

const colorText = (text: string | number, color: Colors): JSX.Element => <span style={{ color, fontWeight: 'bold' }}>{text}</span>;

const JmervilleData = () => {
  const { comment, code, nFiles } = repoLinesStats.TypeScript;
  const { theme } = useTheme();
  const { loading, error, data } = useQuery(ALL_QUERY, {
    variables: { repository: 'jmerville.com' },
  });

  let text = <></>;
  if (data) {
    const { githubStats, traffic } = data;
    const { lastPushedAt, commitCount } = githubStats;
    const { userCount, sessionCount, pageViews, avgSessionDuration } = traffic;

    text = (
      <>
        You are among {colorText(0, Colors.RED)} people visiting the site. The site has received {colorText(pageViews, Colors.YELLOW)} page
        views across {colorText(sessionCount, Colors.YELLOW)} sessions. The last update for this website was{' '}
        {colorText(moment(lastPushedAt).fromNow(), Colors.ORANGE)} and was the{' '}
        {colorText(moment.localeData().ordinal(commitCount), Colors.ORANGE)} commit. The last build of this website contains{' '}
        {colorText(code, Colors.GREEN)} lines of TypeScript code, and {colorText(comment, Colors.GREEN)} comments, across{' '}
        {colorText(nFiles, Colors.GREEN)} files.
      </>
    );
  }

  return (
    <>
      <StyledText color={theme.text} style="PARAGRAPH" isLoading={loading} isError={error ? true : false}>
        {text}
      </StyledText>
    </>
  );
};

export default JmervilleData;
