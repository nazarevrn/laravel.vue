<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createVacation'}" class="btn btn-success">Create new vacation</router-link>
        </div>
 
        <div class="panel panel-default">
            <div class="panel-heading">Vacations list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>user_id</th>
                        <th>begin</th>
                        <th>end</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="vacation, index in vacations">
                        <td>{{ vacation.user_id }}</td>
                        <td>{{ vacation.begin }}</td>
                        <td>{{ vacation.end }}</td>
                        <td>
                            <router-link :to="{name: 'editVacation', params: {id: vacation.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(vacation.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data: function () {
            return {
                vacations: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/vacations')
                .then(function (resp) {
                    app.vacations = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load vacations");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/vacations/' + id)
                        .then(function (resp) {
                            app.vacations.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            }
        }
    }
</script>