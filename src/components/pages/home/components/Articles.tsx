'use client';

import { Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

const articles = [
  {
    title: 'New Guidelines for Cognitive Behavioral Therapy',
    source: 'APA Journal',
    url: 'https://example.com/cbt-guidelines',
  },
  {
    title: 'Digital Tools in Modern Clinical Practice',
    source: 'Health Tech Weekly',
    url: 'https://example.com/digital-tools',
  },
  {
    title: 'Patient Engagement Strategies for 2024',
    source: 'Clinical Today',
    url: 'https://example.com/engagement',
  },
  {
    title: 'Managing Burnout in Healthcare Professionals',
    source: 'Wellness Magazine',
    url: 'https://example.com/burnout',
  },
  {
    title: 'Telehealth Best Practices Update',
    source: 'MedTech News',
    url: 'https://example.com/telehealth',
  },
];

export function Articles() {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ArticleIcon fontSize="small" />
        Trending Articles
      </Typography>
      <List dense disablePadding>
        {articles.map((article, index) => (
          <ListItem key={index} disablePadding sx={{ mb: 1 }}>
            <ListItemText
              primary={
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  color="inherit"
                >
                  {article.title}
                </Link>
              }
              secondary={article.source}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
