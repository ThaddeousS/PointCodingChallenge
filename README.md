Currently I have implemented searching a term and displaying a list of businesses for that term. I ahve 2 screens: SearchScreen.tsx and ListScreen.tsx. I am using @apollo/client for the yelp query along with graphql. I am also using react-navigation for navigating between the two screens. I am also storing the api key for the yelp queries in a client_config.json file. I am still working on displaying reviews and rating for each entry. 

# SearchScreen.tsx
This is a functional component that is just 2 <code>TextInput</code> components for location and term text and a <code>Button</code> component for searching and changing screen

# How to Search
1. Replace "Search..." text with a term you want to search.
2. Replace the "Location..." text with the name of a city
3. Hit search button

# ListScreen.tsx
Component with a <code>FlatList</code> that renders each item from the query.
