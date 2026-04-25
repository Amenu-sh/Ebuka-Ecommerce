export const apiClient = {
  auth: {
    async me() {
      return { role: 'local' };
    },
    logout() {
      return;
    },
    redirectToLogin(redirectUrl = '/') {
      window.location.href = redirectUrl;
    }
  }
};
