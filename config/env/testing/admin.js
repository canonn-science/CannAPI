module.exports = ({ env }) => ({
  providers: [
    {
      uid: "discord",
      displayName: "Discord",
      icon: env("PUBLIC_URL") + env("DISCORD_LOGO_PATH","/files/discord.png"),
      createStrategy: (strapi) =>
        new DiscordStrategy(
          {
            clientID: env("DISCORD_CLIENT_ID"),
            clientSecret: env("DISCORD_SECRET"),
            callbackURL:
              env("PUBLIC_URL") +
              strapi.admin.services.passport.getStrategyCallbackURL(
                "discord"
              ),
            scope: ["identify", "email"],
          },
          (accessToken, refreshToken, profile, done) => {
            done(null, {
              email: profile.email,
              username: `${profile.username}#${profile.discriminator}`,
            });
          }
        ),
    },
  ],
});
