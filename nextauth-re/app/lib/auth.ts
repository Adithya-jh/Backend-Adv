import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: 'Email',

      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },

      async authorize(credentials: any) {
        return {
          id: 'user1',
          name: 'user1',
          email: 'user1@gmail.com',
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // signIn: ({ user }: any) => {
    //   if (user.email == 'sampath@gmail.com') {
    //     return false;
    //   }
    //   return true;
    // },
    // jwt: ({ token, user }: any) => {
    //   console.log(token);
    //   return token;
    // },

    //this session callback is mostly needed

    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
};
