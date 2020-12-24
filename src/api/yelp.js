import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5EaAi6pxzrf6fLzDuoyDI4NFkolRY2GCFcQRXGw7r_ZegczI4VktT6TbTIn1As1E-_pmUI8uRvhj8SzJdRz3koMXxzY5u4tvydgKl-e_BNYhhMxKvlDyx3LtlqXjX3Yx",
  },
});
