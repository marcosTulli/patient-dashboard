'use client';

import { Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useGetArticles } from '../../../hooks';

export function Articles() {
  const { articles } = useGetArticles();
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
