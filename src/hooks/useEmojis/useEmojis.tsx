import { useQuery } from '@tanstack/react-query';
import { EMOJI_API_KEY, http } from '../../config/api';
import { Emoji } from '../../components/Chat/Input/Emojis/Emojis.types';

const getEmojis = async () => {
  return http.get<Emoji[]>(`/categories/smileys-emotion${EMOJI_API_KEY}`);
};

const useEmojis = () => {
  return useQuery({
    queryKey: ['EMOJIS'],
    queryFn: getEmojis,
    staleTime: 99999,
    refetchOnWindowFocus: false,
    select: ({ data }) => {
      return data;
    },
  });
};

export { useEmojis };
