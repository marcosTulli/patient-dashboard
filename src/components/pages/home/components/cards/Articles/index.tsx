'use client';

import { List, ListItem, ListItemText, Link } from '@mui/material';
import { useGetArticles } from '../../../hooks';
import { HomeCard } from '../../HomeCard';

export function Articles() {
  const { articles } = useGetArticles();
  return (
    <HomeCard title={'        Trending Articles'}>
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
    </HomeCard>
  );
}
