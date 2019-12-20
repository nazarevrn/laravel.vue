<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit vacation</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">user_id</label>
                            <input type="text" v-model="vacation.user_id" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Vacation begin</label>
                            <input type="text" v-model="vacation.begin" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Vacation end</label>
                            <input type="text" v-model="vacation.end" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.companyId = id;
            axios.get('/api/v1/vacations/' + id)
                .then(function (resp) {
                    app.vacation = resp.data;
                })
                .catch(function () {
                    alert("Could not load your vacation")
                });
        },
        data: function () {
            return {
                companyId: null,
                company: {
                    user_id: '',
                    begin: '',
                    end: '',
                    //email: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newVacation = app.vacation;
                axios.patch('/api/v1/vacations/' + app.vacationId, newVacation)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not edit your vacation");
                    });
            }
        }
    }
</script>